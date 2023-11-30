import { Container } from "./styles";


export function ButtonText({ icon: Icon, title, type="button", ...rest}) {

  return(
    <Container
      type={type}
      {...rest}
    >

      {
        Icon && <Icon />
      }

      { title }

    </Container>
  );
};