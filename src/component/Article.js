import React from 'react'

function Article({h1,img}) {
  return (
    <div className='article'>
        
<section>

    <article>
        <time datetime="11-12-20">11/12/20</time>
        <h2>{h1}</h2>
        <img src={img} alt="fashion-street" />
        <div class="para">

        
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, quae sint. Maxime, voluptas animi! Recusandae minus iusto perspiciatis molestiae quia aperiam, numquam at blanditiis obcaecati. Sit doloremque fuga temporibus nesciunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, quae sint. Maxime, voluptas animi! Recusandae minus iusto perspiciatis molestiae quia aperiam, numquam at blanditiis obcaecati. Sit doloremque fLorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, quae sint. Maxime, voluptas animi! Recusandae minus iusto perspiciatis molestiae quia aperiam, numquam at blanditiis obcaecati. Sit doloremque fuga temporibus nesciunt.uga temporibus nesciunt.</p>
        <aside>Continues...</aside>
        </div>
    </article>
    </section>
   
    </div>
  )
}

export default Article