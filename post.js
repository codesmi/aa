//use for sub in text ( "<br><h2>  </h2><br>" )
//use for paragraphs in text ( "<p>  </p>" )
//use for images ( "<img src='#'>" )




let data = [
{
    title: "<h1 class='title'> 10-Minute Bodyweight Workout </h1>",
    subtitle: "<h3 class='subtitle'> For Weight Loss </h3>",
    date: "<p class='date'> ⌨️ 26/7/2021 </p> <hr> <br> <br>",
    par1: "<p> Let’s face it: Finding the time to exercise is often a lot harder than your actual workout. Between work, family and friends, personal hobbies, and other social commitments, many people struggle to fit fitness into their daily routine. </p>",
    par2: "<p> Bodyweight exercises solve this problem by giving you an effective workout that can be done anywhere, anytime, with little to no setup. </p>",
    img: "<img class='feature' src='https://vanillalifetime.netlify.app/img/work2.jpg'>",
    par3: "<p> Below is an example of a bodyweight-based workout I did during my weight loss journey. All it took was two to three days a week to see results, and I was able to fit it in while my newborn and two-year-old napped. </p>",
    par4: "<p> Do each exercise for the desired amount of reps, quickly moving from one to the next. When you get to the end, take a 30- to 60-second break and then repeat, cycling through the routine a total of two or three times. I typically did this workout for 10 minutes and increased my time as my fitness improved. </p>",
    par5: "<p> <i> Note: Always warm-up for three to five minutes with low-intensity aerobic activity before starting this routine. Also, if you want to add intensity to this routine, sprinkle in three to five-minute cardio intervals at the end of each round. </i> </p>",
    par6: "<br> <h2> Squats with Side Leg Lift </h2> <br>",
    par7: "<p> Stand with feet a little wider than shoulder-width apart. Hands should be out in front of you for balance. Slowly bend your legs and squat down until thighs are parallel to floor, or ahead. Pause at the bottom, then rise back up, straightening the legs completely and lifting the right leg out to the side for a count of two. Lower your right leg as you bend both legs into a squat. </p>",
    par8: "<p> Repeat 12 to 15 times on each side, alternating which leg you lift. </p>",
    par9: "<br><h2> Push-Ups </h2><br>",
    par10: "<p> Assume a prone position on the floor with the knees fully extended and the toes pointed down to the floor. Place hands on floor, palms down, about 2 to 3 inches wider than shoulder-width apart, with elbows pointed outward. Keeping your body in straight line and toes in contact with the floor, push against the floor with the hands to fully extend the elbows. Pause at the top and then lower to starting position.</p>",
    par11: "<p>  </p>",
    par12: "<p>  </p>",
    par13: "<p>  </p>",
    par14: "<p>  </p>",
    par15: "<p>  </p>",
    par16: "<p>  </p>",
    par17:"<p>  </p>" 
}
];

const info = document.querySelector('#root')



let details = data.map(function(i){
    return "<div class='content'>" + i.title + i.subtitle + i.date + i.img +i.par1 + i.par2 + i.par3 + i.par4 + i.par5  + i.par6 + i.par7 + i.par8 + i.par9 + i.par10 + "</div>"; 
});

info.innerHTML = details.join('\n');