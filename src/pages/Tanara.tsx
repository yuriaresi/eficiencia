import { Student, Content, Description, NameStudent, ImageStudent, StyledLink, DivLink } from '../components/Students';
import { Link } from 'react-router-dom';
import { Button, Buttons } from '../components/Home';

export function Tanara() {
    return (
        <>
        <DivLink>
        <StyledLink to='/'>Home</StyledLink>
        </DivLink>

        <Student selected>
          <ImageStudent src="https://media.licdn.com/dms/image/C4D03AQHY69elQf-D2A/profile-displayphoto-shrink_800_800/0/1630435860458?e=1703721600&v=beta&t=87zcDroa84K_anmSZL-IY49DZZroeDyemqRVELLrimQ" alt="Tanara" />
          <Content>
            <NameStudent>Tanara Fillmann</NameStudent>
            <Description>
                <ul>
                    <li>Resiliente</li>
                    <li>Dedicada</li>
                    <li>Persistente</li>
                </ul>
            </Description>
          </Content>
        </Student>

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

