// import components
import LogHeader from '../../components/sub-pages/LogHeader';
import LogFooter from '../../components/sub-pages/LogFooter';
import LogLink from '../../components/sub-pages/LogLink.tsx';

// books page component
export default function Books() {
    return (
        <article
            className="max-w-3xl mx-auto px-2 py-5"
            id="Books"
        >
            {/* Header */}
            <LogHeader
                title="Books & Reading Logs"
                subtitle="Expanding perspectives, understanding the cosmos, and navigating long commutes through literature."
            />

            {/* Body Content Stream */}
            <div className="mt-8 space-y-6 dark:text-zinc-300 text-zinc-700 text-[15px] leading-relaxed antialiased">
                <p>
                    Books serve as an endless repository of human wisdom, perspective, and mental expansion. Driven by intense{" "}
                    <LogLink to="/curiosity">curiosity</LogLink> and an unyielding urge to understand how the world operates—much like Tony Stark's
                    self-described "curse of knowledge"—reading has become a staple habit in my daily life.
                </p>

                <p>
                    Beyond accelerating personal <LogLink to="/growth">growth</LogLink> and offering fresh mental frameworks, carrying a book turns
                    long, heavy metro commutes to and from the office into productive, deeply peaceful sessions.
                </p>

                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 pt-2">
                    My Reading List
                </h3>

                <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Ikigai</strong>{" "}
                        <em className="text-xs text-zinc-500">(Héctor García & Francesc Miralles)</em>: Hands down the best guide for
                        discovering your life's true purpose and aligning daily effort with long-term fulfillment.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">A Brief History of Time</strong>{" "}
                        <em className="text-xs text-zinc-500">(Stephen Hawking)</em>: The very first book I ever bought. It sparked my deep
                        obsession with cosmic physics and space exploration.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Grand Design</strong>{" "}
                        <em className="text-xs text-zinc-500">(Stephen Hawking & Leonard Mlodinow)</em>: A fascinating exploration into quantum
                        mechanics, string theory, and the underlying architecture of the universe.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Astrophysics for People in a Hurry</strong>{" "}
                        <em className="text-xs text-zinc-500">(Neil deGrasse Tyson)</em>: A concise, witty walkthrough of fundamental
                        astrophysics—perfect for quick, high-density reading sessions.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Don't Believe Everything You Think</strong>{" "}
                        <em className="text-xs text-zinc-500">(Joseph Nguyen)</em>: A powerful breakdown on overcoming cognitive traps,
                        releasing mental suffering, and finding psychological peace.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">The Art of Not Overthinking</strong>{" "}
                        <em className="text-xs text-zinc-500">(Shaurya Kapoor)</em>: Practical strategies to quiet mental chatter, manage anxiety, and stay present.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Can We Be Strangers Again?</strong>{" "}
                        <em className="text-xs text-zinc-500">(Shrijeet Shandilya)</em>: A raw, emotional narrative capturing the pain
                        of heartbreak, fading relationships, and moving forward.
                    </li>
                    <li>
                        <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Too Good to Be True</strong>{" "}
                        <em className="text-xs text-zinc-500">(Prajakta Koli)</em>: An engaging romantic fiction novel that offers a
                        lighthearted, refreshing escape from technical reading.
                    </li>
                </ul>

                <p className="border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 italic text-zinc-500 dark:text-zinc-400">
                    This reading log is a living document. As I explore new genres, scientific theories, and personal narratives, this shelf will continuously expand.
                </p>
            </div>

            {/* Footer */}
            <LogFooter
                text={
                    <p>
                        “Books grant us access to the greatest minds in history. Read continuously, expand your horizon.”
                    </p>
                }
            />
        </article>
    );
}