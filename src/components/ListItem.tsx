import Image from 'next/image';

interface ListItemProps {
  title: string;
  location: string;
  imageUrl: string;
}

export default function ListItem({ title, location, imageUrl }: ListItemProps) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow mb-4">
      <Image src={imageUrl} alt={title} width={64} height={64} className="rounded-lg mr-4" />
      <div>
        <h3 className="font-semibold text-lg text-red-500 bg-white-200">{title}</h3>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
}