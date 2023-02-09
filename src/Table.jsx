import React, { useEffect, useState } from 'react'
import './Table.css'
import pic from './boy.png'
import { useNavigate } from "react-router-dom"
import DataTable from 'react-data-table-component'
import { Modal } from 'react-bootstrap'

import { getValue } from '@testing-library/user-event/dist/utils'
export default function Table() {
    const navigate = useNavigate()
    const [showModel, setShowModel] = useState(false)
    const [ModalData, setModalData] = useState({
        id: '',
        name: '',
        age: '',
        occupation: ''
    })
    const [search, setSearch] = useState('')
    const [students, setStudents] = useState([])
    const [filteredstudents, setFilteredstudents] = useState([])

    const handleClick = () => {
        localStorage.clear();
        navigate('/')
    }
    const GetValue = (row) => {
        setShowModel(!showModel)
        setModalData(row)



    }
    const columns = [
        {
            name: "id",
            selector: (row) => {

                return row.id
            },

        },
        {
            name: "First Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Age",
            selector: (row) => row.age,
        },

        {
            name: "Occupation",
            selector: (row) => row.occupation,
        },
        {
            name: "Viwe Data",
            cell: (row) => {
                return (<><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => GetValue(row)}>
                    View Details
                </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content" style={{width:'70%',margin:"0 auto"}}>

                                <div class="card align-items-center" style={{}}>
                                    <img src={pic} class="card-img-top" alt="..." style={{width:"25%"}}/>
                                        <div class="card-body">
                                            <h5 class="card-title text-center">{ModalData.name}</h5>
                                            <h6 class="card-subtitle mb-2 text-muted text-center">{ModalData.occupation}</h6>
                                            <p class="card-text text-center">{ModalData.age}</p>
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </>
                )
            }
        }
    ]
    let data = [
        {
            name: "John Doe",
            id: 1,
            age: 32,
            occupation: "Developer"
        },
        {
            name: "Jane Doe",
            id: 2,
            age: 27,
            occupation: "Designer"
        },
        {
            name: "Bob Smith",
            id: 3,
            age: 45,
            occupation: "Manager"
        },
        {
            name: "Thomas",
            id: 4,
            age: 42,
            occupation: "Project Lead"
        },
        {
            name: "Jorge",
            id: 5,
            age: 30,
            occupation: "Developer"
        },
        {
            name: "Krish",
            id: 6,
            age: 45,
            occupation: "React Developer"
        }
    ]

    useEffect(() => {
        setFilteredstudents(data)
        // async function CallApi() {
        //     try {
        //         const ApiResult = await axios.get('https://coralmango.com/api/react-test')
        //         setStudents(ApiResult.data)
        //         console.log({students})
        //         setFilteredstudents(ApiResult.data)
        //         console.log(ApiResult.data);
        //         console.log(filteredstudents);
        //     }
        //     catch (error) {
        //         console.log(error);
        //         alert('something went wrong')

        //     }
        // }
        // CallApi()

    }, [])
    const filteredpopup = () => {
        <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
        </div>
    }
    useEffect(() => {
        const result = data?.filter((studentDetail) => {
            return studentDetail.name.toLowerCase().match(search.toLowerCase())

        })
        setFilteredstudents(result)
        filteredpopup()
    }, [search])



    return (
        <>

            <div className='container tablecontainer'>
                <Modal>
                    <Modal.Header closeButton onClick={GetValue}>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                </Modal>

                <DataTable
                    title="Employee Details"
                    columns={columns}
                    data={filteredstudents}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='400px'
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover

                    subHeader
                    subHeaderComponent={<input type="text" placeholder='search here' className='w-25 form-control' value={search} onChange={(e) => setSearch(e.target.value)} />}
                    subHeaderAlign='center'
                />
                <div className='text-center'><button className='col-md-3' onClick={handleClick}>Logout</button></div>

            </div>


        </>
    )
}
