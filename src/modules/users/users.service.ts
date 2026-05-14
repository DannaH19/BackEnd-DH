import { UsersRepository } from "./users.repository";

export class UsersService {
  private repository = new UsersRepository();

  async register(data: any) {
    const exists = await this.repository.findByEmail(data.email);
    if (exists) {
      throw new Error('el usuario ya existe');
    }
    return this.repository.create(data);
  }

  async findAllUsers() {
    return this.repository.findAllUsers();
  }

  async updateUser(id: string, data: any) {
    const result = await this.repository.update(id, data);
    if (!result) throw new Error('Usuario no encontrado');
    return { message: 'Usuario actualizado correctamente', user: result };
  }

  async deleteUser(id: string) {
    const result = await this.repository.delete(id);
    if (!result) throw new Error('Usuario no encontrado');
    return { message: 'Usuario eliminado correctamente' };
  }
}