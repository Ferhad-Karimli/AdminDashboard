import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "../modal/Modal";

export default function ProductTable() {
const [showModal,setShowModal]= React.useState()
        const products = [
    {
      price: '15',
      url: 'https://almali.az/wp-content/uploads/2024/10/canon_eos_r10_mirrorless_camera_1653386725_1708098-1.jpg',
      name: 'Fotoaparat',
    },
    {
      price: '15',
      url: 'https://almali.az/wp-content/uploads/2024/10/canon_eos_r10_mirrorless_camera_1653386725_1708098-1.jpg',
      name: 'Fotoaparat',
    },
    {
      price: '15',
      url: 'https://almali.az/wp-content/uploads/2024/10/canon_eos_r10_mirrorless_camera_1653386725_1708098-1.jpg',
      name: 'Fotoaparat',
    },
    {
      price: '15',
      url: 'https://almali.az/wp-content/uploads/2024/10/canon_eos_r10_mirrorless_camera_1653386725_1708098-1.jpg',
      name: 'Fotoaparat',
    },
    {
      price: '15',
      url: 'https://almali.az/wp-content/uploads/2024/10/canon_eos_r10_mirrorless_camera_1653386725_1708098-1.jpg',
      name: 'Fotoaparat',
    },
  ];
  
  return (
    <>
      {showModal && <Modal setShowModal={setShowModal}  />}

      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 1000,
          mx: "auto",
          mt: 4,
          backgroundColor: "#f9fafb",
        }}
      >
        <Table>
          {/* TABLE HEADER */}
          <TableHead>
            <TableRow sx={{ backgroundColor: "#e5e7eb" }}>
              <TableCell>ID</TableCell>
              <TableCell>Added Time</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          {/* TABLE BODY */}
          <TableBody>
            {products.map((el: any, index: number) => (
              <TableRow
                key={el.id}
                sx={{
                  backgroundColor:
                    index % 2 === 0 ? "#ffffff" : "#f3f4f6",
                }}
              >
                <TableCell>{el.id}</TableCell>
                <TableCell>{el.createdAt}</TableCell>
                <TableCell>{el.price} AZN</TableCell>

                <TableCell>
                  <img
                    src={el.url}
                    alt={el.name}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover", borderRadius: 6 }}
                  />
                </TableCell>

                <TableCell>{el.name}</TableCell>

                <TableCell align="right">
                  {/* <IconButton
                    color="error"
                    onClick={() => setShowModal(true)}
                  >
                    <DeleteIcon />
                  </IconButton> */}

                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mx: 1 }}
                  >
                    Dəyişmək
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                  >
                    Silmək
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
