// 模块与导入
mod utils;
use std::collections::{HashMap, HashSet};
use std::fmt::{self, Display};


const MAX_COUNT: usize = 100;
static mut GLOBAL_COUNTER: i32 = 0;


#[derive(Debug, Clone, PartialEq)]
enum Status {
    Ok,
    Error(String),
}

struct User {
    id: u32,
    name: String,
    status: Status,
}

impl User {
    fn new(id: u32, name: &str) -> Self {
        User {
            id,
            name: name.to_string(),
            status: Status::Ok,
        }
    }

    fn update_status(&mut self, status: Status) {
        self.status = status;
    }
}


trait Printable {
    fn print(&self);
}

impl Printable for User {
    fn print(&self) {
        println!("User: {} - {:?}", self.name, self.status);
    }
}

fn display_all<T: Printable>(items: &[T]) {
    for item in items {
        item.print();
    }
}


fn divide(a: f64, b: f64) -> Result<f64, &'static str> {
    if b == 0.0 {
        Err("Division by zero")
    } else {
        Ok(a / b)
    }
}


fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() { a } else { b }
}


async fn fetch_data() -> Result<String, Box<dyn std::error::Error>> {
    Ok("Fetched data".into())
}


fn main() {
    let mut user = User::new(1, "Alice");
    user.update_status(Status::Error("Disconnected".into()));
    user.print();

    let users = vec![user];
    display_all(&users);

    let result = divide(10.0, 2.0);
    match result {
        Ok(val) => println!("Result: {}", val),
        Err(e) => eprintln!("Error: {}", e),
    }

    let s = longest("short", "longer");
    println!("Longest: {}", s);

    unsafe {
        GLOBAL_COUNTER += 1;
    }
}
