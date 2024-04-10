import { Feature } from "../../common/components/Feature";
import icon_chat from '../../img/icon-chat.webp';
import icon_money from '../../img/icon-money.webp'
import icon_security from '../../img/icon-security.webp'

export const Home = () => {

    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Feature image={icon_chat} feature__title="You are our #1 priority" feature__text="Need to talk to a representative? You can get in touch through our
                                                                                                        24/7 chat or through a phone call in less than 5 minutes." />
                <Feature image={icon_money} feature__title="More savings means higher rates" feature__text="The more you save with us, the higher your interest rate will be!" />
                <Feature image={icon_security} feature__title="Security you can trust" feature__text="We use top of the line encryption to make sure your data and money
                                                                                                        is always safe.." />
            </section>

        </main>
    )
} 