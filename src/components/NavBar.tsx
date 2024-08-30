export default function NavBar({ title }: { title: string }) {
  return (
    <div className="w-full my-4 text-white text-6xl text-center">
      <h1 className="font-header">{title}</h1>
    </div>
  );
}
