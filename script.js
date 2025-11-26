(function(){
	// Event data — update or extend this array to add more events
	const events = [
		{
			id: 'e1',
			title: 'Weekly Code Worshop',
			type: 'weekly',
			badge: 'Weekly',
			desc: 'Join us for casual coding sessions. All skill levels welcome! Every semester we tackle different projects.',
			date: 'Every Tuesday · 5:30 PM - 6:30 PM & Fridays · 1:00 PM - 2:00 PM',
			location: 'Student Lounge, TEC room 105',
			image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7b1b4d9b3a7c8f3f6c0b1f4b2b9b3a6c',
			url: '#'
		},
		{
			id: 'e2',
			title: 'Organizational Events',
			type: 'monthly',
			badge: 'Monthly',
			desc: 'Fun social events to network and unwind with fellow members. Includes game nights, movie screenings, and more!',
			date: 'Monthly 5:15 PM - 7:00  PM',
			location: 'School of Computing Department Conference Room',
			image: 'https://images.unsplash.com/photo-1531379410503-92f3f8a6f8d3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c8a6f9a4f9f6a7f8f7a6c3b2f5a8d1e',
			url: '#'
		},
		{
			id: 'e3',
			title: 'Tech Talk Series National Organized',
			type: 'monthly',
			badge: 'Monthly',
			desc: 'Guest speakers from industry share insights about careers in tech and latest innovations.',
			date: 'Monthly · 4:00 PM - 5:15 PM',
			location: 'Virtual (Zoom)',
			image: 'https://images.unsplash.com/photo-1531379410503-92f3f8a6f8d3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c8a6f9a4f9f6a7f8f7a6c3b2f5a8d1e',
			url: '#'
		},
		{
			id: 'e4',
			title: 'Girls Who Code Hackathon',
			type: 'annual',
			badge: 'Annual',
			desc: 'Our annual hackathon where teams compete to build innovative solutions to real-world problems.',
			date: 'March 2024 · 24 Hours',
			location: 'Student Union Building',
			image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d1f4a2b6a3c4d5e6f7a8b9c0d1e2f3a',
			url: '#'
		}
	];

	const container = document.getElementById('events-container');
	const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
	const modal = document.getElementById('event-modal');

	function createEventCard(ev){
		const card = document.createElement('article');
		card.className = 'event-card';
		card.setAttribute('data-type', ev.type);
		card.innerHTML = `
			<div class="event-hero">
				<img src="${ev.image}" alt="${ev.title}">
				<span class="event-badge">${ev.badge}</span>
			</div>
			<div class="event-body">
				<h3>${ev.title}</h3>
				<div class="event-desc">${ev.desc}</div>
				<div class="event-meta">
					<div class="meta-date">📅 ${ev.date}</div>
					<div class="meta-loc">📍 ${ev.location}</div>
				</div>
				<div class="event-actions">
					<button class="btn-outline secondary" data-id="${ev.id}" aria-haspopup="dialog">Learn More</button>
				</div>
			</div>
		`;

		// attach click
		const btn = card.querySelector('button[data-id]');
		btn.addEventListener('click', ()=>openModal(ev));
		btn.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') openModal(ev) });

		return card;
	}

	function renderEvents(filter='all'){
		container.innerHTML = '';
		const filtered = events.filter(e => filter === 'all' ? true : e.type === filter);
		if(filtered.length === 0){
			const none = document.createElement('p');
			none.textContent = 'No events match that filter.';
			container.appendChild(none);
			return;
		}
		filtered.forEach(ev=> container.appendChild(createEventCard(ev)) );
	}

	// Filters
	filterButtons.forEach(btn => {
		btn.addEventListener('click', ()=>{
			filterButtons.forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-selected', 'false') });
			btn.classList.add('active');
			btn.setAttribute('aria-selected','true');
			const f = btn.dataset.filter;
			renderEvents(f === 'all' ? 'all' : f);
		});
	});

	// Modal helpers
	function openModal(ev){
		modal.setAttribute('aria-hidden', 'false');
		modal.querySelector('.modal-image').src = ev.image;
		modal.querySelector('.modal-image').alt = ev.title;
		modal.querySelector('.modal-title').textContent = ev.title;
		modal.querySelector('.modal-desc').textContent = ev.desc;
		modal.querySelector('.modal-date').textContent = '📅 ' + ev.date;
		modal.querySelector('.modal-location').textContent = '📍 ' + ev.location;
		modal.querySelector('.modal-cta').href = ev.url || '#';
		// focus close button for accessibility
		setTimeout(()=> modal.querySelector('.modal-close').focus(), 50);
	}

	function closeModal(){
		modal.setAttribute('aria-hidden', 'true');
	}

	// modal events
	modal.addEventListener('click', (e)=>{
		if(e.target.matches('[data-close]') || e.target.classList.contains('modal-close')) closeModal();
	});
	document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

	// wire modal close button
	const closeBtn = document.querySelector('.modal-close');
	if(closeBtn) closeBtn.addEventListener('click', closeModal);

	// initial render
	renderEvents('all');

	// expose small API for debugging
	window.GWCEvents = { render: renderEvents, events };

	/* Mobile nav toggle */
	(function(){
		const header = document.querySelector('.navbar');
		const toggle = document.querySelector('.nav-toggle');
		if(!header || !toggle) return;
		toggle.addEventListener('click', ()=>{
			const expanded = toggle.getAttribute('aria-expanded') === 'true';
			toggle.setAttribute('aria-expanded', String(!expanded));
			header.classList.toggle('nav-open');
		});
		// close when clicking a nav link
		document.querySelectorAll('.navbar nav a').forEach(a=>{
			a.addEventListener('click', ()=>{ header.classList.remove('nav-open'); toggle.setAttribute('aria-expanded','false'); });
		});
	})();

	/* Join modal (Join The Loop) handling */
	const joinBtn = document.getElementById('join-loop-btn');
	const joinModal = document.getElementById('join-modal');
	if(joinBtn && joinModal){
		const joinQr = joinModal.querySelector('.join-qr-image');
		const joinCode = joinModal.querySelector('.join-code');
		const joinLink = joinModal.querySelector('.join-open-link');

		function openJoinModalFromBtn(btn){
			const url = btn.dataset.url || '#';
			const qr = btn.dataset.qr || '';
			const code = btn.dataset.code || '';
			joinModal.setAttribute('aria-hidden','false');
			if(joinQr){
				// Helper to generate a QR via qrserver (fallback)
				const generateQrFor = (payload) => {
					const encoded = encodeURIComponent(payload);
					return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`;
				};

				// Decide what payload to encode: prefer the join URL, otherwise the numeric code
				const fallbackPayload = url || code || `CL${code}`;

				if(qr){
					// try the provided QR path first; if it fails, fall back to generated QR
					joinQr.style.display = '';
					joinQr.src = qr;
					joinQr.alt = `QR code for ${code}`;
					let triedFallback = false;
					joinQr.onerror = function(){
						if(triedFallback) {
							this.style.display = 'none';
							this.removeAttribute('src');
							this.alt = '';
							return;
						}
						triedFallback = true;
						this.src = generateQrFor(fallbackPayload);
						this.alt = `QR code for ${fallbackPayload}`;
					};
					joinQr.onload = function(){ this.style.display = ''; };
				} else {
					// No provided image — generate one from the join URL or code
					joinQr.style.display = '';
					joinQr.src = generateQrFor(fallbackPayload);
					joinQr.alt = `QR code for ${fallbackPayload}`;
					joinQr.onerror = function(){ this.style.display = 'none'; this.removeAttribute('src'); this.alt = ''; };
					joinQr.onload = function(){ this.style.display = ''; };
				}
			}
			if(joinCode) joinCode.textContent = code;
			if(joinLink) joinLink.href = url;
			setTimeout(()=> joinModal.querySelector('.modal-close').focus(),50);
		}

		joinBtn.addEventListener('click', ()=> openJoinModalFromBtn(joinBtn));

		// close handling for join modal
		joinModal.addEventListener('click', (e)=>{
			if(e.target.matches('[data-close]') || e.target.classList.contains('modal-close')){
				joinModal.setAttribute('aria-hidden','true');
			}
		});

		// ensure Escape closes join modal as well
		document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') joinModal.setAttribute('aria-hidden','true'); });
	}
		// Tab switching for join modal
		const joinTabButtons = joinModal.querySelectorAll(".tab-btn");
		const joinTabContents = joinModal.querySelectorAll("[data-tab-content]");

		joinTabButtons.forEach(btn => {
 			 btn.addEventListener("click", () => {

   		// Update button active state
		 joinTabButtons.forEach(b => b.classList.remove("active"));
   		 btn.classList.add("active");

   		 // Show the correct tab pane
   		 const selected = btn.dataset.tab;
   		 joinTabContents.forEach(content => {
   		   if (content.dataset.tabContent === selected) {
     	   content.hidden = false;     // show the chosen section
		    } else {
    	    content.hidden = true;      // hide all others
			}
		});
	});
});
})();

