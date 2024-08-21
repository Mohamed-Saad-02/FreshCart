import { Outlet } from "react-router-dom";
import Container from "../ui/Container";

function PasswordProcess() {
  return (
    <section className="h-full flex items-center justify-center px-4 md:px-0 md:w-3/4 lg:w-1/2 mx-auto py-12">
      <Container>
        <Outlet />
      </Container>
    </section>
  );
}

export default PasswordProcess;
