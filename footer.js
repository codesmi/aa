let footerData = [
    {
        name:"<p >Let’s face it: Finding the time to exercise is often a lot harder than your actual workout. Between work, family and friends, personal hobbies, and other social commitments, many people struggle to fit fitness into their daily routine.</p><p >Bodyweight exercises solve this problem by giving you an effective workout that can be done anywhere, anytime, with little to no setup.<br />Below is an example of a bodyweight-based workout I did during my weight loss journey. All it took was two to three days a week to see results, and I was able to fit it in while my newborn and two-year-old napped.</p><p >Do each exercise for the desired amount of reps, quickly moving from one to the next. When you get to the end, take a 30- to 60-second break and then repeat, cycling through the routine a total of two or three times. I typically did this workout for 10 minutes and increased my time as my fitness improved.</p><p >Note: Always warm-up for three to five minutes with low-intensity aerobic activity before starting this routine. Also, if you want to add intensity to this routine, sprinkle in three to five-minute cardio intervals at the end of each round.</p>" 
    }
];
const footer = document.querySelector('#footer');

let infor = footerData.map(function(f)
{
    return f.name;
}
);
 
footer.innerHTML =infor.join("\n");
