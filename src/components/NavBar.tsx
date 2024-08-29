export default function NavBar({ title }: { title: string }) {
  return (
    <div className="w-full text-white text-5xl text-center">
      <h1 className="font-header">{title}</h1>
    </div>
  );
}
