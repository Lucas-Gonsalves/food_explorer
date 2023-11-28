import { Container, Brand } from "./styles";
import Logo from "../../assets/logo.svg"


export function SignIn() {

  return(

    <Container>

      <main>

        <Brand>

          <h1>Food explorer</h1>
          <img src={Logo} alt="Logo polígono" />

        </Brand>

      </main>

    </Container>
  );
};