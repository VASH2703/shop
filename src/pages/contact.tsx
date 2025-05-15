import { Button, Hl1,  Hl3, Input, Link, TextArea, Title6 } from "../UI";
import style from './contact.module.css';

export const Contact = () => {
    const address = 'Москва, ул. Пушкина д. 25';
    const note = 'Вход со двора';
    return (
        <main>
            <Hl1>Контакты</Hl1>
            <div className={style.content}>
                <div className={style.map}>
                    <div className={style.background}/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5052971346113!2d37.800273641522146!3d55.7497240119213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aca925339199d%3A0x3f58083602ba35e5!2z0JzQsNGA0YLQtdC90L7QstGB0LrQsNGPINGD0LsuLCAyNSwg0JzQvtGB0LrQstCwLCAxMTEzOTQ!5e0!3m2!1sru!2sru!4v1739473647798!5m2!1sru!2sru" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className={style.card}>
                        <div className={style.adress}>
                            <div className={style.title}>Адрес</div>
                            <div>{address}</div>
                            <div>{note}</div>
                        </div>
                    </div>
                </div>
                <div className={style.feedback}>
                    <Hl3>У вас есть вопрос?</Hl3>
                    <div className={style.info} >
                        <Title6>Заполните форму и мы отправим ответ на почту в течении 15 минут</Title6>
                        <div className={style.form}>
                            <Input placeholder="Ваше имя" />
                            <Input placeholder="Ваша почта"/>
                            <TextArea placeholder="Задайте вопрос" className={style.text}/>
                        </div>
                        <Button full >Отправить вопрос</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}