import { Selector} from "testcafe";

fixture ('testcafeDemo')

 .page ('https://outlook.live.com/owa/')
  test('LOGIN PAGE', async t => {

    // wait until the action is done

          await t
          .debug()
          .click(Selector('a').withText('Sign in'))
          .maximizeWindow()
//.click('.internal sign-in-link')
// Sign -n code
.typeText('#i0116', 'hcltest00@outlook.com')
.click('#idSIButton9')
.typeText('#i0118','India@123456')
.click('#idSIButton9')
.click("#KmsiCheckboxField")
.click('#idSIButton9')
.wait(25000)
  })
/* eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjlkYmYyYjc5LTZiNjItNGUzYi1iYzYyLTA2ZmIxZjkzYjU3Ny0xNjc1Njg1NzEzNzMyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMWZjOWM5NDUtYmEwOC00NDBjLTg1NTctMGM2M2ZiZWQ2OTAwIiwidHlwZSI6InQifQ.rLsi7fXArD22UhDUTiC2DVQW09ChK-G6Zx9iQBk4vLU */
 
;