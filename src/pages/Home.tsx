import { Link } from 'react-router-dom';
import { Title, Text, Main, Button, Buttons } from '../components/Home';

export function Home() {
  return (
    <>
      <Main>
        <Title>Grupo Eficiência</Title>
        <Text>Durante o trabalho em equipe, os membros demonstraram muita objetividade, 
            capacidade de liderança, empenho, praticidade e pontualidade. Por esta razão, 
            o projeto desenvolvido destacou a eficiência do grupo na solução de problemas.</Text>
      </Main>

      <Buttons>
        <li>
      <Link to='/gabriel'><Button><img src="https://avatars.githubusercontent.com/u/111029467?v=4" alt="Gabriel" /></Button></Link>
      </li>
      <li>
      <Link to='/jessica'><Button><img src="https://avatars.githubusercontent.com/u/117686537?v=4" alt="Jéssica" /></Button></Link>
      </li>
      <li>
      <Link to='/stephan'><Button><img src="https://avatars.githubusercontent.com/u/109179158?v=4" alt="Stefan" /></Button></Link>
      </li>
      <li>
      <Link to='/tanara'><Button><img src="https://media.licdn.com/dms/image/C4D03AQHY69elQf-D2A/profile-displayphoto-shrink_800_800/0/1630435860458?e=1703721600&v=beta&t=87zcDroa84K_anmSZL-IY49DZZroeDyemqRVELLrimQ" alt="Tanara" /></Button></Link>
      </li>
      <li>
      <Link to='/yuri'><Button><img src="https://avatars.githubusercontent.com/u/127044623?v=4" alt="Yuri" /></Button></Link>
      </li>
      </Buttons>


    </>
  );
}
