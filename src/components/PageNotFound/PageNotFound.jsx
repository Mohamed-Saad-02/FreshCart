import Image404 from "../../assets/images/error.svg";
import Container from "../../ui/Container";
import GoBack from "../GoBack/GoBack";

function PageNotFound() {
  return (
    <section className="py-6 grid h-full">
      <Container>
        <div className="w-fit ml-auto">
          <GoBack replace={true} />
        </div>
        <div className="h-full flex items-center justify-center">
          <img src={Image404} alt="Page Not Found" />
        </div>
      </Container>
    </section>
  );
}

export default PageNotFound;
