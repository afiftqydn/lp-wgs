import React from 'react';

// ======================================================================
// 1. DEFINISI STYLES SEBAGAI OBJEK JAVASCRIPT (Modern Concept - Domain Change)
// ======================================================================

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#FFFFFF', 
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", 
        color: '#2c3e50', 
    },
    illustrationContainer: {
        maxWidth: '500px',
        width: '100%',
    },
    illustrationImage: {
        // Gunakan ilustrasi yang mencerminkan 'perubahan' atau 'pemindahan'
        maxWidth: '100%', 
        height: 'auto',
        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))', 
    },
    heading: {
        color: '#27ae60', // Warna Aksen Hijau (Melambangkan Sukses/Pindah)
        fontSize: '2.5em',
        fontWeight: 700,
        marginBottom: '10px',
    },
    subHeading: {
        color: '#7f8c8d',
        fontSize: '1.2em',
        fontWeight: 400,
        marginBottom: '30px',
    },
    message: {
        color: '#34495e',
        marginBottom: '40px',
        maxWidth: '700px',
        lineHeight: 1.8, 
        fontSize: '1.1em',
    },
    newDomainText: {
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    button: {
        display: 'inline-block',
        padding: '16px 35px', // CTA yang lebih besar
        backgroundColor: '#27ae60', // Hijau yang menarik
        color: 'white',
        textDecoration: 'none', 
        borderRadius: '50px', // Bentuk pil/rounded penuh untuk kesan modern
        fontWeight: 'bold',
        fontSize: '1.1em',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        boxShadow: '0 8px 20px rgba(39, 174, 96, 0.4)', // Bayangan yang lebih kuat
        border: 'none',
        cursor: 'pointer',
    },
    contactInfo: {
        marginTop: '50px',
        color: '#bdc3c7', 
        fontSize: '0.9em',
    }
};

// ======================================================================
// 2. KOMPONEN REACT DENGAN NARASI PERGANTIAN DOMAIN
// ======================================================================

const MaintenanceNavigation = ({ 
    oldDomain = "Domain sebelumnya", // Tambahkan props untuk domain lama jika diperlukan
    navigationLink = "https://www.firmansgroup.com",
    // Ilustrasi yang cocok: 'migration', 'change', 'new path'
    illustrationSrc = "../404.png" 
}) => {
    
    // Pesan yang fokus pada pergantian domain
    return (
        <div style={styles.container}>
            
            <div style={styles.illustrationContainer}>
                <img 
                    src={illustrationSrc} 
                    alt="Domain Migration Illustration" 
                    style={styles.illustrationImage}
                />
            </div>
            
            {/* Header: Langsung menginformasikan perubahan */}
            <h1 style={styles.heading}>Website Resmi Telah Berganti!</h1>
            <p style={styles.subHeading}>Kami sekarang pindah ke <span style={styles.newDomainText}>{navigationLink.replace('https://', '')}</span>.</p>


            {/* CTA yang Jelas */}
            <a 
                href={navigationLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.button}
            >
                {/* Teks CTA: Ajak pengguna untuk segera mengunjungi link baru */}
                Jelajahi Website Baru Kami Sekarang
            </a>

        </div>
    );
};

export default MaintenanceNavigation;