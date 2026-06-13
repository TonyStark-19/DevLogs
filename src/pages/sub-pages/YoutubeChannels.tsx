// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import { ApnaCollege } from '../../components/sub-pages/ExternalLinks.tsx';
import { BeerBiceps } from '../../components/sub-pages/ExternalLinks.tsx';
import { TwitterLink } from '../../components/sub-pages/SocialLinks.tsx';

// youtube channels page component
export default function YoutubeChannels() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="YoutubeChannels"
        >
            {/* Header */}
            <LogHeader
                title="YouTube channels"
                subtitle="Leveraging global educators to master modern digital skills."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    YouTube channels are a transformative resource in today's digital age, offering a wealth
                    of information and opportunities for <LogLink to="/skills">skill</LogLink> development to anyone
                    willing to invest their time and <LogLink to="/dedication">dedication</LogLink>.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        In this era where knowledge is at our fingertips, YouTube bridges the gap between
                        traditional education and modern learning.
                    </li>
                    <li>
                        It becomes especially crucial when quality teachers or resources are not easily
                        accessible in schools, universities, or local institutions. By simply searching for the
                        right channels, learners can connect with some of the best educators and practitioners
                        in any field, all available for free or minimal cost.
                    </li>
                </ul>

                <p>
                    The platform's versatility is unmatched, catering to an audience with diverse interests.
                    Whether you're seeking tutorials, lectures, career advice, creative inspiration, or
                    technical know-how, there's a channel for everything.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        The only prerequisite is having the <LogLink to="/discipline">discipline</LogLink> and{' '}
                        <LogLink to="/mindset">mindset</LogLink> to <LogLink to="/how-to-start">start</LogLink> learning and apply
                        that knowledge <LogLink to="/consistency">consistently</LogLink>.
                    </li>
                    <li>
                        With YouTube, the barriers to learning are reduced significantly, empowering individuals
                        to achieve their goals, learn new <LogLink to="/skills">skills</LogLink>, and explore
                        their passions at their own pace.
                    </li>
                </ul>

                <p>Here is my list of YouTube channels which I found useful :</p>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <ApnaCollege /> — A great channel for beginners to advanced learners focusing on coding, Data Structures, and Development.
                    </li>
                    <li>
                        <BeerBiceps /> — Offers engaging <LogLink to="/podcast">podcasts</LogLink> with thought leaders, life lessons, and self-improvement advice.
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p className='leading-8'>
                        "Have a favorite YouTube channel which has helped you in your journey? <br /> You can share your recommendations in my <TwitterLink />"
                    </p>
                }
            />
        </article>
    );
}