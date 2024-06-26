import instance from "@/data/Instance"

export default  {
    getContribution : (academicyear)=> instance.get(`/contribution?academicyear=${academicyear}`) ,
    getContributionwithpage : (page)=> instance.get(`/contribution?page=${page}`) ,
    getContributionByFacultyId : (id)=> instance.get(`/contribution?facultyid=${id}`) ,
    downloadfile : (id)=> instance.get(`/contribution/download/${id}`,{ responseType: 'blob' }) ,
    createContribution : (formdata)=> instance.post('/contribution',formdata) ,
    updateContribution : (id,formdata)=> instance.put(`/contribution/${id}`,formdata) ,
    deleteContribution : (id)=> instance.delete(`/contribution/${id}`) ,
    getContributionById : (id)=> instance.get(`/contribution/${id}`) ,
    getContributionByFacId : (id)=> instance.get(`/contribution/fac/${id}`), 
    getContributionByStudent : (id)=> instance.get(`/contribution/student/${id}`) 
}