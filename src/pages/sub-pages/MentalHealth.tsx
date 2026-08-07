// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';
import SocialLinks from '../../components/sub-pages/SocialLinks.tsx';
import { TwitterLink } from '../../components/sub-pages/SocialLinks.tsx';

// mental health page component
export default function MentalHealth() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="MentalHealth"
        >
            {/* Header */}
            <LogHeader
                title="Mental health"
                subtitle="Nurturing a stable mind as the foundation for sustainable growth."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Mental health is one of the most important aspects of overall well-being, yet it is often  overlooked. A stable mind is essential for{" "}
                    <LogLink to="/productivity">productivity</LogLink>, happiness, and balance in life.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        When mental health is not in good shape, it can lead to feelings of <LogLink to="/exhaustion">exhaustion</LogLink>, lack of{" "}
                        <LogLink to="/motivation">motivation</LogLink>, and an inability to <LogLink to="/focus">focus</LogLink> on personal or professional goals.
                    </li>
                    <li>
                        Many people struggle with mental health challenges, but the key to overcoming them lies in self-improvement, self-care, and maintaining
                        a positive <LogLink to="/mindset">mindset</LogLink>.
                    </li>
                    <li>
                        For me, mental health has been something deeply personal. While it might look from the outside like I am just a highly{" "}
                        <LogLink to="/consistency">consistent</LogLink> developer coding daily and building seamlessly in public, only I know the sheer weight of the
                        incredibly tough days hidden in between.
                    </li>
                    <li>
                        It got intensely hard at points—navigating isolation with no one to talk to, dealing with a poor environment at home, and fighting off clear
                        signs of depression. I still vividly remember many days where I was writing code while tears literally hit my laptop's keypad.
                    </li>
                </ul>

                <p>
                    Instead of getting stuck in negative thoughts or circumstances beyond our control, the best approach is to keep moving forward by focusing on{" "}
                    <LogLink to="/growth">personal growth</LogLink>.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <LogLink to="/upskilling">Upskilling</LogLink>, learning new things, and setting goals can give a sense of purpose and direction. Productivity
                        plays a major role in maintaining mental stability—when we feel accomplished, our <LogLink to="/confidence">confidence</LogLink> grows, and our
                        mental health improves.
                    </li>
                    <li>
                        I don't want to dive deep into exactly what happened, how it unfolded, or where I stand right now. All I want to pass on is that the absolute
                        best thing you can do during these dark phases is to lock in and keep moving around your niche—for me, anchoring myself entirely to coding was
                        that saving grace.
                    </li>
                    <li>
                        However, it's also important to understand that bad days are normal, and it's okay to take breaks when needed. The goal should always be
                        progress, not perfection.
                    </li>
                </ul>

                <p>
                    Developing daily habits that support mental well-being is essential. <LogLink to="/meditation">Meditation</LogLink>, exercise, and listening to{" "}
                    <LogLink to="/music">music</LogLink> can be great ways to clear the mind and reduce stress.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                    <li>
                        Engaging in creative activities, <LogLink to="/journaling">journaling</LogLink> thoughts, or even maintaining an online presence by sharing
                        progress, like on <SocialLinks />, can provide a sense of fulfillment and connection.
                    </li>
                    <li>
                        Consistently journaling my thoughts, forcing myself to talk to trusted connections, and proactively working on my inner state were the vital
                        pillars I used to slowly overcome those phases. If you are going through it right now, just remember that you are absolutely not alone. Keep
                        working on yourself, take it one day at a time, and things will get better.
                    </li>
                    <li>
                        Surrounding yourself with positivity, whether through people, content, or experiences, also plays a crucial role in mental resilience.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    At the core of mental well-being is self-prioritization. When we make ourselves a priority, we naturally cultivate a mindset of self-care, growth,
                    and continuous improvement. Instead of waiting for circumstances to change, we take charge of our own lives to become the best version of ourselves.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “What do you do to maintain good mental health? Let me know in my <TwitterLink />”
                    </p>
                }
            />
        </article>
    );
}