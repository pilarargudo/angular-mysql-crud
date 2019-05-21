export interface Game {
  id?: number; // ? optional
  title?: string;
  description?: string;
  image?: string; // TODO improvement cloudinary
  created_at?: Date
}
