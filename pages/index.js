import { Navbar } from "../components/Navbar";
import { useUser } from "@auth0/nextjs-auth0";
import { TaskList } from "../components/TaskList";

export default function Home() {
  const { user, isLoading, error } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="container">
      <Navbar user={user} />
      {user ? (
        <TaskList email={user.email}/>
      ) : (
        <div className="jumbotron mt-5">
          <h1 className="display-4">To show your task list please login</h1>
        </div>
      )}
    </div>
  );
}
