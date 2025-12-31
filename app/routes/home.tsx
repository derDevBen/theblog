import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <> 
    {" "}
    <h1>Welcome to my page!</h1>
    <p>This is my, kind of blog, page. Still under heavy construction. <br/> 
      But stay and enjoy pictures from Harburg, Germany.</p>
    </>
  );
}
