import React from 'react';


const quoteState = {
    quote: [
      { text: 'Nothing is impossible, the word itself says, “I’m possible!', author: 'Audrey Hepburn' },
      { text: 'It is never too late to be what you might have been.', author: 'George Eliot'},
      {text: 'When I let go of what I am, I become what I might be', author: 'Lao Tzu'},
      {text: 'We must balance conspicuous consumption with conscious capitalism.', author: 'Kevin Kruse'},
      {text: 'Definiteness of purpose is the starting point of all achievement.', author: ' W. Clement Stone'},
      {text: 'A truly rich man is one whose children run into his arms when his hands are empty.', author: 'Unknown'},
      {text: 'The person who says it cannot be done should not interrupt the person who is doing it.', author: 'Chinese Proverb'},
      {text: 'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.', author: 'Jamie Paolinetti'},
      {text: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.', author: 'Aristotle'},
      {text: 'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.', author: 'Michael Jordan'},
      {text: 'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.', author: 'Aristotle'},
      {text: 'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.', author: 'Marie Curie'},
      {text: 'Life is what we make it, always has been, always will be.', author: 'Grandma Moses'},
      {text: 'Teach thy tongue to say, “I do not know,” and thous shalt progress.', author: 'Maimonides'},
      {text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
      {text: 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.', author: 'Erma Bombeck'},
      {text: 'There are no traffic jams along the extra mile.', author: 'Roger Staubach'},
      {text: 'The best revenge is massive success.', author: 'Frank Sinatra'},
      {text: 'Dreaming, after all, is a form of planning.', author: 'Gloria Steinem'},
      {text: 'You may be disappointed if you fail, but you are doomed if you don’t try.', author: 'Beverly Sills'},
      {text: 'The question isn’t who is going to let me; it’s who is going to stop me.', author: 'Ayn Rand'},
      {text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius'},
      {text: 'It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.', author: 'Mae Jemison'},
      {text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs'},
      {text: 'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.', author: 'Vincent Van Gogh'},
      {text: 'Winning isn’t everything, but wanting to win is.', author: 'Vince Lombardi'},
      {text: 'If the wind will not serve, take to the oars.', author: 'Latin Proverb'},
      {text: 'Education costs money. But then so does ignorance.', author: 'Sir Claus Moser'},
      {text: 'Either you run the day, or the day runs you.', author: 'Jim Rohn'},
      {text: 'Winning isn’t everything, but wanting to win is.', author: 'Vince Lombardi'},

    ]
  };

  function nextQuote(event ) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }
  