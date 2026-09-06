document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}}));
const revealEls=document.querySelectorAll('.section-head,.case,.mustering-detail,.card,.timeline>div,.approach-grid>div,.about>div,.skill-list');
revealEls.forEach(el=>el.classList.add('reveal'));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
revealEls.forEach(el=>observer.observe(el));
window.addEventListener('scroll',()=>document.querySelector('.nav')?.classList.toggle('scrolled',window.scrollY>20));

const contactSection=document.querySelector('#contact');
const emailButton=contactSection?.querySelector('a[href^="mailto:"]');
if(contactSection&&emailButton&&!contactSection.querySelector('.linkedin-link')){
  const linkedIn=document.createElement('a');
  linkedIn.className='button light linkedin-link';
  linkedIn.href='https://www.linkedin.com/in/deepika-punjabi-a3315062/';
  linkedIn.target='_blank';
  linkedIn.rel='noopener noreferrer';
  linkedIn.textContent='LinkedIn →';
  linkedIn.style.marginLeft='12px';
  emailButton.insertAdjacentElement('afterend',linkedIn);
}
