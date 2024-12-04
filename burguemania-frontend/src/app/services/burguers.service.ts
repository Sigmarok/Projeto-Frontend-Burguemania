import { Injectable } from '@angular/core';
import axios from 'axios';

export interface BurguerItem {
  id: string;
  name: string;
  base_Description: string;
  full_Description: string;
  price: number;
  path_Image: string;
}

export interface Category {
  Id: string;
  Name: string;
  Path_Image: string;
  products: {
    $id: string;
    $values: BurguerItem[];
  };
}

export interface Order {
  statusId: number;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class BurguersService {

  private apiUrl = 'http://localhost:5042/api'; // Substitua pela URL da sua API

  constructor() { }

  async getBurguersByCategory(category: string): Promise<BurguerItem[]> {
    try {
      const response = await axios.get<Category>(`${this.apiUrl}/Categories/${category}`);
      console.log('API response:', response.data); // Log para depuração
      return response.data.products.$values;
    } catch (error) {
      console.error('Error fetching burguers by category:', error);
      return [];
    }
  }

  async getAllBurgers(): Promise<BurguerItem[]> {
    try {
      const response = await axios.get<{ $values: BurguerItem[] }>(`${this.apiUrl}/Products`);
      console.log('API response:', response.data); // Log para depuração
      return response.data.$values;
    } catch (error) {
      console.error('Error fetching all burguers:', error);
      return [];
    }
  }

  async getBurgerByID(id: string): Promise<BurguerItem | undefined> {
    try {
      const response = await axios.get<BurguerItem>(`${this.apiUrl}/Products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching burger by id:', error);
      return undefined;
    }
  }

  async getBurgerByName(name: string): Promise<BurguerItem | undefined> {
    try {
      const response = await axios.get<BurguerItem[]>(`${this.apiUrl}/Products?name=${name}`);
      console.log('API response:', response.data); // Log para depuração
      return response.data.length > 0 ? response.data[0] : undefined;
    } catch (error) {
      console.error('Error fetching burger by name:', error);
      return undefined;
    }
  }

  async createOrder(order: Order): Promise<void> {
    try {
      const response = await axios.post(`${this.apiUrl}/Orders`, order);
      console.log('Order created:', response.data); // Log para depuração
    } catch (error) {
      console.error('Error creating order:', error);
    }
  }
}
