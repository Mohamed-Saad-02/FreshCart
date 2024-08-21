import Register from "../components/Register/Register";

function SignUp() {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="container px-4 md:px-0 md:w-3/4 lg:w-1/2 mx-auto py-8">
        <h1 className="text-xl">Register Now :</h1>
        <Register />
      </div>
    </section>
  );
}

export default SignUp;
