import React from 'react';

const VisitorCounter = () => {
  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      backgroundColor: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '10px',
      fontFamily: 'sans-serif',
      border: '1px solid #ddd',
      
      // TAMBAHAN: Agar user tetap bisa select text "Total Visitors" tapi ga bisa klik
      userSelect: 'none' 
    },
    label: {
      marginBottom: '3px',
      color: '#555',
      fontWeight: 'bold'
    },
    // TAMBAHAN: Style khusus untuk mematikan link
    disableClick: {
      pointerEvents: 'none', // INI KUNCINYA: Bikin elemen "tembus pandang" dari mouse
      cursor: 'default',     // Kursor tetap panah biasa, bukan jari telunjuk
      display: 'flex'        // Biar rapi
    }
  };

  return (
    <div style={styles.container}>
      <span style={styles.label}>Total Visitors:</span>
      
      {/* Kita bungkus <a> dengan style disableClick */}
      <div style={styles.disableClick}>
        <a href="https://www.hitwebcounter.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://hitwebcounter.com/counter/counter.php?page=21474065&style=0006&nbdigits=5&type=page&initCount=300" 
            title="Free Tools" 
            alt="Web Counter" 
            border="0" 
          />
        </a>
      </div>
      
    </div>
  );
};

export default VisitorCounter;