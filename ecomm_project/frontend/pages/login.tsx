import { Card,  Button } from 'react-bootstrap';
import style from '@/styles/Login.module.css';
export default function Login() {
    return (
        <div >
            <span><a href="/"><img className="m-2" src="./duck-line-art-pitr-Ducky-icon.svg" height={50} width={50}/></a></span>
            <div>
                <Card style={{width: '23rem', border:'none'}} className="shadow-lg p-3 mb-5 bg-white rounded mx-auto" >
                    <Card.Body >
                        <Card.Title>
                            Sign in
                        </Card.Title>
                        <Card.Text>
                            <div>
                                <p className="font-weight-light">Access to hundreds of deals and steals await.</p>
                            </div>
                            <div className="d-grid gap-2 mb-2">
                                <input style={{borderRadius: 10}} className="mb-2 p-2" type="text" placeholder="Username"/>
                            </div>
                            <div className="d-grid gap-2 mb-2">
                                <input style={{borderRadius: 10}} className="mb-2 p-2" type="password" placeholder="Password" />
                            </div>
                            <div className="mb-2">
                                <a style={{fontSize: 12, color:'#f7797d'}} href="#">Forgot password?</a>
                            </div>
                            <div className="d-grid gap-2">
                                <Button size="lg" className="p-2" style={{backgroundColor: '#f7797d', border:'none', borderRadius: 25, fontSize: 14}}>Sign in</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}