import './App.css';

function App() {
  return (
    <div className="App">
        <div className='main'>
            <div className='center'>
                <div className='menu'>
                    <div className='logo'>
                        <h3>SocialSite</h3>  
                    </div>
                    <div className='item-menu'>
                        <a href='#'>Login</a>  
                    </div>  
                </div>

                <div className='form'>
                    <form>
                          <h3>Entre em contato conosco!</h3>
                          <div className='items-form'>
                              <input type='text' placeholder='Seu nome'/>
                              <input type='text' placeholder='Sobrenome'/>
                              <input type='text' placeholder='numero'/>
                              <input type='text' placeholder='email'/>
                              <input type='submit'/>  
                          </div>
                    </form>
                </div>
            </div>
        </div>
            <footer>
                  Saturn ©
                  <div className='instagram-button'></div>
                  <a href='https://www.instagram.com/rick_ricardo331/'>@rick_ricardo331</a>
            </footer>
    </div>
  );
}

export default App;
