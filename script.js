(function(){
	// Event data — update or extend this array to add more events
	const events = [
		{
			id: 'e1',
			title: 'Weekly Code & Coffee',
			type: 'weekly',
			badge: 'Weekly',
			desc: 'Join us for casual coding sessions and networking over coffee. All skill levels welcome!',
			date: 'Every Wednesday · 6:00 PM - 8:00 PM',
			location: 'Cook Library Study Room',
			image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7b1b4d9b3a7c8f3f6c0b1f4b2b9b3a6c',
			url: '#'
		},
		{
			id: 'e2',
			title: 'Tech Talk Series',
			type: 'monthly',
			badge: 'Monthly',
			desc: 'Guest speakers from industry share insights about careers in tech and latest innovations.',
			date: 'Monthly · 7:00 PM - 8:30 PM',
			location: 'School of Computing Auditorium',
			image: 'https://images.unsplash.com/photo-1531379410503-92f3f8a6f8d3?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0c8a6f9a4f9f6a7f8f7a6c3b2f5a8d1e',
			url: '#'
		},
		{
			id: 'e3',
			title: 'Spring Hackathon',
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

})();

