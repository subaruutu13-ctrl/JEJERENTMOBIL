// Data Mobil dengan Kategori
const cars = [
    {
        name: "Ferrari F8 Tributo",
        type: "Supercar",
        seats: 2,
        transmission: "Automatic",
        price: 7000000,
        image: "🏎️",
        badge: "Supercar",
        category: "supercar"
    },
    {
        name: "Lamborghini Huracan",
        type: "Supercar",
        seats: 2,
        transmission: "Automatic",
        price: 6000000,
        image: "🏎️",
        badge: "Exotic",
        category: "supercar"
    },
    {
        name: "Audi R8",
        type: "Supercar",
        seats: 2,
        transmission: "Automatic",
        price: 5500000,
        image: "🏎️",
        badge: "Exotic",
        category: "supercar"
    },
    {
        name: "McLaren 720S",
        type: "Supercar",
        seats: 2,
        transmission: "Automatic",
        price: 5000000,
        image: "🏎️",
        badge: "Supercar",
        category: "supercar"
    },
    {
        name: "Mercedes-Benz AMG GT",
        type: "Sports Car",
        seats: 2,
        transmission: "Automatic",
        price: 4500000,
        image: "🏎️",
        badge: "Premium",
        category: "supercar"
    },
    {
        name: "Porsche 911",
        type: "Sports Car",
        seats: 4,
        transmission: "Automatic",
        price: 4000000,
        image: "🏎️",
        badge: "Luxury",
        category: "supercar"
    },
    {
        name: "Bentley Continental GT",
        type: "Grand Tourer",
        seats: 4,
        transmission: "Automatic",
        price: 3500000,
        image: "🚗",
        badge: "Ultra Luxury",
        category: "luxury"
    },
    {
        name: "Range Rover Autobiography",
        type: "Luxury SUV",
        seats: 5,
        transmission: "Automatic",
        price: 2500000,
        image: "🚐",
        badge: "Premium",
        category: "luxury"
    },
    {
        name: "Mercedes-Benz S-Class",
        type: "Luxury Sedan",
        seats: 5,
        transmission: "Automatic",
        price: 2000000,
        image: "🚗",
        badge: "Executive",
        category: "luxury"
    },
    {
        name: "BMW M4",
        type: "Sports Car",
        seats: 4,
        transmission: "Automatic",
        price: 1500000,
        image: "🏎️",
        badge: "Performance",
        category: "luxury"
    },
    {
        name: "Toyota Alphard",
        type: "MPV Luxury",
        seats: 7,
        transmission: "Automatic",
        price: 1200000,
        image: "🚐",
        badge: "VIP",
        category: "premium"
    },
    {
        name: "Mitsubishi Pajero Sport",
        type: "SUV Premium",
        seats: 7,
        transmission: "Automatic",
        price: 700000,
        image: "🚐",
        badge: "Premium",
        category: "premium"
    },
    {
        name: "Toyota Fortuner",
        type: "SUV Premium",
        seats: 7,
        transmission: "Automatic",
        price: 600000,
        image: "🚐",
        badge: "Popular",
        category: "premium"
    },
    {
        name: "Cherry Tiggo 8",
        type: "SUV Premium",
        seats: 7,
        transmission: "Automatic",
        price: 500000,
        image: "🚙",
        badge: "New Arrival",
        category: "premium"
    },
    {
        name: "Honda HR-V",
        type: "SUV Compact",
        seats: 5,
        transmission: "Automatic",
        price: 450000,
        image: "🚙",
        badge: "Trending",
        category: "premium"
    },
    {
        name: "Toyota Innova Reborn",
        type: "MPV Premium",
        seats: 7,
        transmission: "Automatic",
        price: 400000,
        image: "🚙",
        badge: "Premium",
        category: "premium"
    },
    {
        name: "Mitsubishi Xpander",
        type: "MPV Modern",
        seats: 7,
        transmission: "Manual",
        price: 300000,
        image: "🚙",
        badge: "Best Seller",
        category: "ekonomis"
    },
    {
        name: "Honda Jazz",
        type: "Hatchback Sporty",
        seats: 5,
        transmission: "Automatic",
        price: 300000,
        image: "🚗",
        badge: "Sporty",
        category: "ekonomis"
    },
    {
        name: "Toyota Avanza",
        type: "MPV Keluarga",
        seats: 7,
        transmission: "Manual",
        price: 250000,
        image: "🚙",
        badge: "Populer",
        category: "ekonomis"
    },
    {
        name: "Daihatsu Xenia",
        type: "MPV Ekonomis",
        seats: 7,
        transmission: "Manual",
        price: 250000,
        image: "🚙",
        badge: "Ekonomis",
        category: "ekonomis"
    },
    {
        name: "Suzuki Ertiga",
        type: "MPV Compact",
        seats: 7,
        transmission: "Manual",
        price: 250000,
        image: "🚙",
        badge: "Rekomendasi",
        category: "ekonomis"
    },
    {
        name: "Honda Brio",
        type: "City Car",
        seats: 5,
        transmission: "Manual",
        price: 200000,
        image: "🚗",
        badge: "Hemat",
        category: "ekonomis"
    }
];

// Render Cars
const carsContainer = document.getElementById('carsContainer');
const carSelect = document.getElementById('car');

function renderCars() {
    carsContainer.innerHTML = '';
    
    cars.forEach((car, index) => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card fade-in';
        carCard.setAttribute('data-category', car.category);
        carCard.innerHTML = `
            <div class="car-image">
                ${car.image}
                <div class="car-badge">${car.badge}</div>
            </div>
            <div class="car-info">
                <h3 class="car-name">${car.name}</h3>
                <p class="car-type">${car.type}</p>
                <div class="car-specs">
                    <span class="spec">👥 ${car.seats} Penumpang</span>
                    <span class="spec">⚙️ ${car.transmission}</span>
                </div>
                <div class="car-price-row">
                    <div>
                        <div class="car-price">Rp ${car.price.toLocaleString('id-ID')}</div>
                        <p class="price-note">per hari</p>
                    </div>
                    <button onclick="bookCar('${car.name}', ${car.price})" class="btn-book">Book</button>
                </div>
            </div>
        `;
        carsContainer.appendChild(carCard);

        const option = document.createElement('option');
        option.value = car.name;
        option.textContent = `${car.name} - Rp ${car.price.toLocaleString('id-ID')}/hari`;
        carSelect.appendChild(option);
    });
}

renderCars();

// Filter Cars
function filterCars(category) {
    const allCards = document.querySelectorAll('.car-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update button active state
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards
    allCards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            if (card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

// Smooth Scroll Function
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Book Car Function - Auto-fill & Highlight
function bookCar(carName, carPrice) {
    // Auto-fill mobil yang dipilih
    const carSelect = document.getElementById('car');
    carSelect.value = carName;
    
    // Scroll ke form booking
    const bookingSection = document.querySelector('.booking-section');
    bookingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    
    // Highlight effect
    setTimeout(() => {
        bookingSection.classList.add('highlighted');
        
        // Remove highlight after animation
        setTimeout(() => {
            bookingSection.classList.remove('highlighted');
        }, 1500);
    }, 500);
    
    // Focus ke input nama
    setTimeout(() => {
        document.getElementById('name').focus();
    }, 1000);
}

// WhatsApp Function
let selectedCarForWA = '';

function openWhatsApp(carName = '', carPrice = '') {
    const phoneNumber = '6281345792315'; // Format internasional (62 untuk Indonesia)
    let message = 'Halo JEJERentMobil! 👋\n\n';
    
    if (carName) {
        message += `Saya tertarik untuk booking:\n🚗 *${carName}*\n💰 Rp ${carPrice.toLocaleString('id-ID')}/hari\n\n`;
    } else {
        message += 'Saya ingin bertanya tentang rental mobil.\n\n';
    }
    
    message += 'Mohon info lebih lanjut. Terima kasih! 🙏';
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Form Handling with WhatsApp Integration
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        car: formData.get('car'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        notes: formData.get('notes')
    };

    // Validasi
    if (!data.name || !data.phone || !data.car || !data.startDate || !data.endDate) {
        document.getElementById('errorMessage').style.display = 'block';
        setTimeout(() => {
            document.getElementById('errorMessage').style.display = 'none';
        }, 3000);
        return;
    }

    // Hitung durasi rental
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 untuk include hari pertama

    // Cari harga mobil
    const selectedCar = cars.find(car => car.name === data.car);
    const totalPrice = selectedCar ? selectedCar.price * diffDays : 0;

    // Show loading
    document.getElementById('loadingSpinner').style.display = 'block';
    
    // Simulate processing (bisa dihapus jika langsung ke WA)
    setTimeout(() => {
        // Hide loading
        document.getElementById('loadingSpinner').style.display = 'none';
        
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        
        // Create WhatsApp message
        const phoneNumber = '6281345792315';
        const message = `🚗 *BOOKING BARU - JEJERentMobil*

👤 *Data Customer:*
Kode Booking: ${data.kode_booking}
Nama: ${data.name}
No. HP: ${data.phone}
${data.email ? `Email: ${data.email}` : ''}

🚙 *Detail Rental:*
Mobil: ${data.car}
Harga: Rp ${selectedCar.price.toLocaleString('id-ID')}/hari

📅 *Periode Rental:*
Mulai: ${formatDate(data.startDate)}
Selesai: ${formatDate(data.endDate)}
Durasi: ${diffDays} hari

💰 *Total Harga:*
Rp ${totalPrice.toLocaleString('id-ID')}

${data.notes ? `📝 *Catatan:*\n${data.notes}` : ''}

Terima kasih! 🙏`;

        // Open WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WA in new tab after 1 second
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
        }, 1000);
        
        // Reset form
        this.reset();
        
        // Hide success after 8 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 8000);
        
        // Scroll to success message
        document.getElementById('successMessage').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 1500);
});

// Format date untuk display
function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
}

// Date Validation
const today = new Date().toISOString().split('T')[0];
document.getElementById('startDate').setAttribute('min', today);
document.getElementById('endDate').setAttribute('min', today);

document.getElementById('startDate').addEventListener('change', function() {
    document.getElementById('endDate').setAttribute('min', this.value);
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});