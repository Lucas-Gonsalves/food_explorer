import { Container, Brand, Title, Section, Form } from "./styles";
import Logo from "../../assets/logo.svg"

import { Input } from "../../Components/Input";


export function SignIn() {

  return(

    <Container>
      <main>


        <Title>
          <Brand>
            <h1>Food explorer</h1>
            <img src={Logo} alt="Logo polígono" />
          </Brand>

          <h2>Logar</h2>
        </Title>
        

    
        <Section>
          <Form>
            <h3>Faça seu login</h3>

            <Input 
              type="email"
              placeholder="E-mail"
              autoComplete="email"
            />

          </Form>

          <button/>
        </Section>


      </main>
    </Container>
  );
};