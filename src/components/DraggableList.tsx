import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import ListItem from './ListItem';
import { useState } from 'react';

interface Item {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
}

interface DraggableListProps {
  items: Item[];
}

export default function DraggableList({ items: initialItems }: DraggableListProps) {
  const [items, setItems] = useState<Item[]>(initialItems);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`transition-all duration-200 ${snapshot.isDragging ? 'scale-60' : ''}`}
                    style={{
                      ...provided.draggableProps.style,
                      opacity: snapshot.isDragging ? 0.8 : 1,
                    }}
                  >
                    <ListItem title={item.title} location={item.location} imageUrl={item.imageUrl} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}