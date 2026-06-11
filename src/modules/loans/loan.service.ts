import { LoanRepository } from "./loan.repository";
import { LoanModel } from "./loan.model";
import { BookRepository } from "../library/book.repository";

export class LoanService {
  private repository = new LoanRepository();
  private bookRepository = new BookRepository();

  async getLoans() {
    const loans = await this.repository.findAll();
    return await this.repository.populate(loans, ['user', 'book']);
  }

  async createLoan(loan: LoanModel) {
    // Verificar disponibilidad del libro
    const book = await this.bookRepository.findById(loan.book.toString());
    if (!book) throw new Error("Libro no encontrado");
    if (book.availableCopies < 1) throw new Error("No hay copias disponibles");
    
    // Calcular fechas
    loan.loanDate = new Date();
    loan.dueDate = new Date();
    loan.dueDate.setDate(loan.dueDate.getDate() + 15); // 15 días de préstamo
    loan.status = 'active';
    loan.fine = 0;
    loan.createdAt = new Date();
    loan.updatedAt = new Date();
    
    // Reducir copias disponibles
    await this.bookRepository.update(book._id!.toString(), {
      availableCopies: book.availableCopies - 1
    });
    
    const result = await this.repository.create(loan);
    return { message: "Préstamo creado correctamente", loan: result };
  }

  async returnBook(id: string) {
    const loan = await this.repository.findById(id);
    if (!loan) throw new Error("Préstamo no encontrado");
    
    loan.returnDate = new Date();
    loan.updatedAt = new Date();
    
    // Calcular multa si aplica
    if (loan.returnDate > loan.dueDate) {
      const daysLate = Math.ceil((loan.returnDate.getTime() - loan.dueDate.getTime()) / (1000 * 3600 * 24));
      loan.fine = daysLate * 1; // $1 por día
      loan.status = 'overdue';
    } else {
      loan.status = 'returned';
    }
    
    // Aumentar copias disponibles nuevamente
    const book = await this.bookRepository.findById(loan.book.toString());
    if (book) {
      await this.bookRepository.update(book._id!.toString(), {
        availableCopies: book.availableCopies + 1
      });
    }
    
    const result = await this.repository.update(id, loan);
    return { message: "Libro devuelto correctamente", loan: result, fine: loan.fine };
  }

  async getUserLoans(userId: string) {
    const loans = await this.repository.findByUser(userId);
    return await this.repository.populate(loans, ['book']);
  }

  async getActiveLoans() {
    const loans = await this.repository.findActive();
    return await this.repository.populate(loans, ['user', 'book']);
  }

  async deleteLoan(id: string) {
    const loan = await this.repository.findById(id);
    if (!loan) throw new Error("Préstamo no encontrado");
    
    // Si el préstamo estaba activo, devolver copia
    if (loan.status === 'active') {
      const book = await this.bookRepository.findById(loan.book.toString());
      if (book) {
        await this.bookRepository.update(book._id!.toString(), {
          availableCopies: book.availableCopies + 1
        });
      }
    }
    
    const result = await this.repository.delete(id);
    return { message: "Préstamo eliminado correctamente" };
  }
}