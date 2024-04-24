import instance from "@/data/Instance"

export default  {
    getFaculty : ()=> instance.get('/faculty') ,
    getFacultyByAcademic : (id)=> instance.get(`/faculty?academicyearid=${id}`) ,
    createFaculty : (formdata)=> instance.post('/faculty',formdata) ,
    updateFaculty : (id,formdata)=> instance.put(`/faculty/${id}`,formdata) ,
    deleteFaculty : (id)=> instance.delete(`/faculty/${id}`) ,
    getFacultyById : (id)=> instance.get(`/faculty/${id}`) 
}