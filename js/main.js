document.addEventListener('DOMContentLoaded', () => 
{
    const faqContent = document.querySelector('.faq-content');

    faqContent.addEventListener('click', (e) => 
    {
        //console.log(e.target);
        const groupHeader = e.target.closest('.faq-group-header');
        console.log(groupHeader);

        if(groupHeader == null)
            return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = group.querySelector('i');

        // Toggle icon
        /* The classList.toggle method adds the class if it's not present or removes it if it is.

        In this case, the classes fa-plus and fa-minus are toggled on the <i> element. This works because:
        Initially, the icon has the fa-minus class (<i class="fas fa-minus"></i>).

        When the click event occurs:
        icon.classList.toggle('fa-plus') adds fa-plus to the icon's classes.
        icon.classList.toggle('fa-minus') removes fa-minus from the icon's classes.

        The icon visually changes because Font Awesome uses these class names to determine which icon to display. 
        - ChatGPT */

        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
        
        // Toggle the body
        groupBody.classList.toggle('open');

        // Close other open body
        const otherGroups = faqContent.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => 
        {
            if(otherGroup != group)
            {
                otherGroup.querySelector('.faq-group-body').classList.remove('open');
                otherGroup.querySelector('i').classList.remove('fa-minus');
                otherGroup.querySelector('i').classList.add('fa-plus');
            }
        });
    });
    
    /* Calvin's code
    const faqMenu = document.querySelector('.faq-menu');

    faqMenu.addEventListener('click', (e) => {

        //console.log("Test");

        const selectedItem = e.target.closest('li');
        
        if(selectedItem == null)
            return;

        //console.log(listItem);

        selectedItem.classList.toggle('active');

        const listItems = faqMenu.querySelectorAll('li');

        listItems.forEach(item => {
            if(item != selectedItem){
                item.classList.remove('active');
            }
        });
    }); */
});