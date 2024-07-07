'use client';

import DraggableList from '../components/DraggableList';
import { listItems } from '../data/listItems';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Draggable List</h1>
      <DraggableList items={listItems} />
    </main>
  );
}