# CRUD Operations Angular
CRUD operation with Angular, Bootstrap, .NET Core Web API and Entity framework (In memory database)

## Steps Followed for Angular Project<br/>
--> Create new project with ng new Project Name <br/>
--> Create new Module with ng generate module Inventory<br/>
--> Create new interface ng generate module Inventory/inventory<br/>
--> Create 4 new components using Angular CLI command<br/>
    ng generate component Inventory/home<br/>
    ng generate component Inventory/create<br/>
    ng generate component Inventory/view<br/>
    ng generate component Inventory/edit<br/>
--> Create new service using Angular CLI command ng generate service Inventory/inventory<br/><br/> 
 ### Screens will look like below<br/>
--> Home screen with list of Inventories<br/>
    ![image](https://user-images.githubusercontent.com/97409456/150730546-a082ef6d-995c-4f5c-9c7f-b5d3b8972138.png)
--> Add new Inventory<br/>
    ![image](https://user-images.githubusercontent.com/97409456/150730623-f64f9007-5366-4f4a-a5ab-96b601e5ad00.png)
<br/>--> Edit existing Inventory<br/>
    ![image](https://user-images.githubusercontent.com/97409456/150730677-b4cf4cbb-6175-40fe-b9db-e0f8904a11b2.png)
<br/>--> View Inventory<br/>
    ![image](https://user-images.githubusercontent.com/97409456/150730732-da02692a-ddfc-497a-b2ea-0f8f15ac17f3.png)

    
 ## Steps Followed for Web API Project<br/>
 --> Create new Web API project with command dotnet new webapi -n Project name   
 --> Add reference to below nuget packages<br/>
    Microsoft.EntityFrameworkCore<br/>
    Microsoft.EntityFrameworkCore.InMemory<br/>
    Swashbuckle.AspNetCore(for Swagger UI)
  --> Add Interface IInventoryR for required actions<br/>
  --> Implement interface IInventoryRepository in class InventoryRepository<br/>
  --> Add new Controller with Name inventory Controller and implement following API action methods<br/>
   ![image](https://user-images.githubusercontent.com/97409456/150730192-a846811a-ee74-4f51-98cb-bd34c83c8523.png)

    
   
                                                                                                 
    
