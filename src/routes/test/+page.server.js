import { invalid, redirect } from "@sveltejs/kit"

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData()
        console.log(request) 
        // console.log(formData())
        console.log(formData,'formdata')
        const name = formData.get('name')
        const email = formData.get('email')
        
      

        console.log(name, 'name') 
        console.log(email, 'email')

        // throw redirect(303, '/contacts')

    // return {
    //     success: true,
    // }
    }
}