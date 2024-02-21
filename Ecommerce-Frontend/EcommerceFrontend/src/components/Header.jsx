import { useSelector } from 'react-redux';

function Header() {
  const state = useSelector((state) => state);
  console.log('Header ', state.loggedin.Username);
  return (
    <div className="jumbotron p-3 mb-0 rounded-0 bg-light ">
      <img
        src={'vrukshaGajananLogo.png'}
        style={{ width: '100px', height: '100px' }}
        className="float-left"
      />
      {state.loggedin.IsLoggedIn ? (
        <>
          {/* <h5 className="float-left">Role : {state.loggedin.Role}</h5> */}
          <h5 className="float-right">
            Welcome ! {state.loggedin.Username}
          </h5>{' '}
        </>
      ) : (
        ''
      )}
      <h3 style={{ fontSize: '75px' ,color: '#7fa629' }} className=" font_design text-center font-weight-bold" >
        Vruksha Gajanan
      </h3>
      <div className="clearfix"></div>
    </div>
  );
}

export default Header;
