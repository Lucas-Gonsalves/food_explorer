import { Container, Brand, Title, Section, Form } from "./styles";
import { Envelope, Lock } from "@phosphor-icons/react";
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
          <h3>Faça seu login</h3>
          <Form>
           
            <Input 
              icon={Envelope}
              type="email"
              placeholder="E-mail: xxx@xxx.xxx"
              autoComplete="email"
            />
            
            <Input 
              icon={Lock}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />

            <button/>
          </Form>
        </Section>


      </main>
    </Container>
  );
};