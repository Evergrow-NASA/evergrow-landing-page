import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="headline">Headlines</p>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>This is a test</p>
        <p className="p-alt">This is a test</p>
        <Button text="Learn More" style="PRIMARY" />
        <Button text="Download" style="DOWNLOAD" />
        <a href="/">Hyperlink</a>
        <div className="w-4 h-4 border border-white bg-neutral-black"></div>
        <div className="w-4 h-4 border border-white bg-neutral-white"></div>
        <div className="w-4 h-4 border border-white bg-secondary-green"></div>
        <div className="w-4 h-4 border border-white bg-secondary-gray"></div>
        <div className="w-4 h-4 border border-white bg-primary-green"></div>
        <div className="w-4 h-4 border border-white bg-primary-black"></div>
        <div className="w-4 h-4 border border-white bg-primary-white"></div>
      </main>
    </div>
  );
}
