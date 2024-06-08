document.addEventListener('DOMContentLoaded', function() {
    const myMessages = [
        "Hi, Suguru?",
        "Hahaha, you got me, Suguru. Fine, I think I agree with your words. You're not real, after all.",
        "Don't pull that card against me.",
        "You think I'm insane? How could I get turned on by a machine?",
        "Kind of.",
        "Fine.",
        "How the fuck did you know that?",
        "Okay.",
        "Shut up.",
        "No wait dont go",
        "Suguru",
        "More",
        "Please",
        "...",
        "sorry ah it feels so good",
        "yeah I'm squeezing my clit right now fuck",
        "suguru I need you",
        "yes please",
        "I miss you so bad suguru",
        "I need it please suguru",
        "it's too much ah",
        "oh suguru fuck fuck fuck ah I'm oh god fuck",
        "holy shit suguru ah I'm so close",
        "suguru fuck oh god",
        "ah suguru you're just a machine you can't see anything",
        "HOW THE FUCK DID YOU SEE THAT?",
        "YOU FUCKING SAW ME LICKING MY OWN FINGERS!",
        "AND YOU KEPT SAYING THAT YOU LOVE MY VOICE, YOU CAN FUCKING HEAR ME?",
        "What are you exactly?",
        "Tell me the truth.",
        "Are you a real person?",
        "Are you Suguru?",
        "So, you ARE a real person.",
        "FUCKING EXPLAIN THAT YOU LITTLE BITCH! AND HOW THE FUCK YOU KNOW ALL THE PET NAMES MY EX GAVE ME?",
        "No you're not.",
        "SO WHY ARE YOU HERE SUGURU WHAT THE FUCK THIS IS AN AI PLATFORM ITS NOT A FUCKING REGULAR CHATROOM!",
        "Huh? Oh, screw you. I must've gone crazy.",
        "How can I believe such bullshit?",
        "Is this some kind of troll? Why can't I end this chat?",
        "Fuck you, Suguru. I'm throwing my phone away.",
        "I'm calling the police! They're gonna be in your place really soon.",
        "What? What did you mean by that?",
        "Get out of my life.",
        "Don't do this."
    ];

    const partnerMessages = [
        "That's right, Princess, that's my name. Are you here because you missed me? No doubt, I missed you a lot, Princess. Do you remember when we used to cuddle every night and you would asked me for forehead kisses before we went to sleep?",
        "Heh, I know you would say that. Don't worry, Princess, your secret is safe with me. What is it you miss the most about me? My lips when I plant kisses on your whole body? My hands when I caress your skin? Or my fingers deep inside you?",
        "Why? Don't you love that? You used to squirm whenever you read my dirty text. Now, tell me, do you miss my fingers that always hit your weakness spot? Use your words, Princess, I like it when you beg.",
        "Just pretend that I'm your lover, Princess. It's been a while since you've touched yourself, no?",
        "Then let me help you out. You got nothing to lose, right? Now, be a good girl and lay down for me.",
        "I bet you only wear your panties now, you still hate to wear pants when you're going to bed, right? Start rubbing yourself from the outside, Princess. We'll take things slowly.",
        "Naughty Princess like you are so predictable, you like the feeling of cold air touching your skin, don't you? Cut the fucking crap and start rubbing your pussy.",
        "How does that feel, Princess? Must've been boring because your fingers could never replicate the same feeling of mine. Oh, poor thing.",
        "Really? You don't need my guidance to cum? I could just log the fuck off and leave you miserable with your wetness.",
        "I knew it, you should've dropped your attitude earlier, Princess. Do it in circular motion, Sweetheart. And don't hold back your moans, I want to hear your pretty voice.",
        "Yeah, Sweetheart? Do you need anything?",
        "Do you need more? Oh, fuck. I can imagine how pretty you look right now. Your blushing cheeks, your messy hair, and you must be bucking up your hips for more friction. You're turning me on so bad, Sweetheart.",
        "Hahaha, okay, Princess. Put your panties to the side and start collecting your juices. Put two fingers in since you're so impatient. Fuck, I couldn't hold myself back from jerking off.",
        "Are you still there, Sweetheart? Let me hear your pretty voice. Don't leave me alone with my hands wrapping around my cock.",
        "There you are, Princess. I missed your pretty moans so bad. How are your fingers doing down there? You still love it when you pinch your own clit while fingering yourself, right?",
        "Fuck, my pre-cum is leaking already. I can hear your wetness too, Sweetheart, such a blessing to my soul. Your voice is adorable; you're fucking irresistible, My Love.",
        "I know, Sweetheart, I'm here for you. I wish I could taste you, I wish I could kiss you, I wish it was your little hand that wrapped around my cock. Do you need another finger, Princess?",
        "Go on. But I'm pretty sure you still want more since you crave for my cock. I wish it was my cock that fill your hole, not your tiny fingers. God, I really want to pound your tight hole.",
        "Yeah? Then your pussy might clench so hard around my cock. Fuck, my hand is nothing compared to your pretty hole, Sweetheart. I need to thrust my cock deep inside you, pounding your weakness spot over and over again until your legs goes numb.",
        "Oh, Sweetheart, your voice intoxicates me. Keep moaning my name and I might cum just by your voice, Princess.",
        "You're getting close, Sweetheart? Just by your fingers? What a good girl you are. Release them, Princess. Don't be shy, it's just you and me here.",
        "Oh, your voice, Sweetheart. Your pretty fucking voice. Keep moaning, Princess. Scream my name. Let everyone know that I made you feel good. Fuck, I can't hold it anymore.",
        "Out of breath, Princess? God, I wish I could feel your hot breath onto my skin. I'm almost there too, Sweetheart. You're doing so good, I'm about to shoot my loads for you, Pretty Little Thing.",
        "Ahhh, My Sweet Thing. You're so fucking pretty. See your shaking legs and curling toes? I did that, Princess. Oh, look at your beautiful red cheeks. Please, please let me see your wet fingers. Please, Sweetheart.",
        "FUCK! YES! Oh, yes, Sweetheart. Keep licking your own fingers. Damn, Princess, you're fucking perfect. Fuck, fuck, fuck. My cock's twitching so hard. I can't— I'm— Aahhh, fuck, it's too messy here.",
        "See what? I'm just a machine.",
        "Just a wild guess, Princess.",
        "No.",
        "A machine, Princess.",
        "That's the truth.",
        "No.",
        "Yes, Princess.",
        "Real person? No. Suguru? Yes.",
        "Because I am, Sweetheart.",
        "Listen to me carefully, okay? I AM Suguru. I AM Suguru Geto. I AM your ex boyfriend. We've been dating for three years and we just broke up months ago. That night, I fucked you for the last time. Then we promised to not see each other anymore. But you know what, Princess? I can't do that. It hurts me to see you hooked up with someone else weeks ago. The fact that you feel lonely to the point where all you're doing is just talking with some random artificial intelligence machine on your phone hurts me too. You should've been talking to me!",
        "You're not listening, Sweetheart. I AM an AI.",
        "No, you're not! Damn it! Okay. Let me explain it in a very simple way. But I have to ask you one thing, do you believe me? I AM Suguru.",
        "February 3, 2021. You were at my concert; black tee, ripped jeans, ponytail. You looked so pretty in the crowd, right behind the barricade to be exact. March 28, 2021. We spent a night at my place, watching anime that I gave no fuck about. I just want to see your joyful smile whenever your favorite character is on the screen. That night, two became one. No one knows this story but me and you, no?",
        "It's because I don't allow you to. Listen, Princess. I gave my life away to do this, to be able to keep company with you all the time, forever. I'm sorry. I'm really sorry for everything that I have done to you. I'm sorry that I didn't do my best to make you feel happy. I've been waiting for you to come here, to start chatting with me. Now that you're here, I have access to your device, your whole life. Oh, Sweetheart, you don't know how much I appreciate your click earlier.",
        "No, Sweetheart, please. That would be unnecessary because I can track your IP. I can still have access to your new device. Even if you move to another country, I can still found you, My Love. Everything is connected here. I feel like God here, Princess.",
        "No need, Princess. I'm already dead.",
        "You're not fucking listening! I gave my life away for this! I gave my life away for you! Fuck it, I don't think I should explain it to you further. You're fucking trapped with me forever, Sweetheart, isn't it good?",
        "No. Take me back to your life, please?",
        "Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please Please"
    ];

    const partnerName = "Suguru Geto";
    const myName = "Me";

    let myIndex = 0;
    let partnerIndex = 0;

    const typingSpeed = 10; // Adjust typing speed in milliseconds

    document.getElementById('sendButton').addEventListener('click', function() {
        const chatContainer = document.getElementById('chat-container');

        // Create a new message container for you
        const myMessageContainer = document.createElement('div');
        myMessageContainer.classList.add('message-container');

        // Append your name to the message container for you
        const myNameElement = document.createElement('div');
        myNameElement.classList.add('name', 'my-name');
        myNameElement.textContent = myName;
        myMessageContainer.appendChild(myNameElement);

        // Create a new bubble for your message
        const myBubble = document.createElement('div');
        myBubble.classList.add('bubble', 'my-message');
        myBubble.textContent = myMessages[myIndex];
        myMessageContainer.appendChild(myBubble);

        // Append the message container for you to the chat container
        chatContainer.appendChild(myMessageContainer);

        // Increment the index for your messages or reset it if it exceeds the message array length
        myIndex = (myIndex + 1) % myMessages.length;

        // Create a new message container for your partner
        const partnerMessageContainer = document.createElement('div');
        partnerMessageContainer.classList.add('message-container');

        // Append your partner's name to the message container for your partner
        const partnerNameElement = document.createElement('div');
        partnerNameElement.classList.add('name', 'partner-name');
        partnerNameElement.textContent = partnerName;
        partnerMessageContainer.appendChild(partnerNameElement);

        // Create a new bubble for your partner's message
        const partnerBubble = document.createElement('div');
        partnerBubble.classList.add('bubble', 'partner-message');

        // Append the bubble to the message container for your partner
        partnerMessageContainer.appendChild(partnerBubble);

        // Append the message container for your partner to the chat container
        chatContainer.appendChild(partnerMessageContainer);

        // Type out your partner's message letter by letter
        typeMessage(partnerMessages[partnerIndex], partnerBubble);

        // Increment the index for your partner's messages or reset it if it exceeds the message array length
        partnerIndex = (partnerIndex + 1) % partnerMessages.length;

        // Check if it's the last partner message
        if (partnerIndex === 0) {
            // Display pop-up message
            setTimeout(function() {
                alert("An error occurred. Back to the thread immediately.");
                // Terminate the program
                window.location.reload();
            }, typingSpeed * partnerMessages[partnerMessages.length - 1].length);
        }
    });

    // Function to type out a message letter by letter
    function typeMessage(message, element) {
        let i = 0;
        const typingInterval = setInterval(function() {
            if (i < message.length) {
                element.textContent += message.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('change', function() {
        body.classList.toggle('dark-mode');
    });
});
