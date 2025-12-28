import { Button } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const navbarData = [
    {
      link: '/dashboard',
      name: 'Dashboard',
    },
    {
      link: '/categories',
      name: 'Kategoriyalar',
    },
    {
      link: '/products',
      name: 'Products',
      children: [
        {
          link: '/products',
          name: 'Məhsullar',
        },
        {
          link: '/products/new',
          name: 'Yeni məhsul əlavə et',
        },
      ],
    },
    {
      link: '/messages',
      name: 'Mesajlar',
    },
    {
      link: '/settings',
      name: 'Ayarlar',
    },
  ];
  const handleLogout = () => {
    navigate('/login');
    localStorage.removeItem('isAuth');
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        height: '100vh',
        padding: '20px',
        borderRight: '1px solid #ccc',
        marginTop: '30px',
      }}
    >
      {navbarData.map((el) => (
        <div key={el.name} style={{ marginBottom: '10px' }}>
          {/* PARENT */}
          <NavLink
            to={el.link}
            onClick={() => setOpenMenu(openMenu === el.name ? null : el.name)}
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#1976d2' : '#333',
              cursor: 'pointer',
            })}
          >
            {el.name}
          </NavLink>
          {/* CHILDREN */}
          {el.children && openMenu === el.name && (
            <div style={{ marginLeft: '15px', marginTop: '6px' }}>
              {el.children.map((child) => (
                <NavLink
                  key={child.name}
                  to={child.link}
                  style={({ isActive }) => ({
                    display: 'block',
                    textDecoration: 'none',
                    marginTop: '6px',
                    color: isActive ? '#1976d2' : '#555',
                    fontWeight: isActive ? 'bold' : 'normal',
                  })}
                >
                  • {child.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}

      <Button
        variant="outlined"
        style={{ position: 'absolute', bottom: '10%', width: '150px' }}
        onClick={() => handleLogout()}
      >
        Çıxış
      </Button>
    </div>
  );
}
