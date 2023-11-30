import { Container } from "./styles";


export function Button({ icon: Icon, loading = false, title, ...rest }) {


  return(
    <Container
      type="submit" 
      {...rest}
    >

      {
        Icon && <Icon/>
      }


      {
        loading ? "Carregando" : title
      }

    </Container>
  );
};