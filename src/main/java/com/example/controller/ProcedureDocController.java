package com.example.controller;

import com.example.entity.ProcedureDoc;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProcedureDocController {

    @RequestMapping(value = "/procedure_doc", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public HttpStatus procedureDoc(@RequestBody ProcedureDoc procedureDoc) {

        System.out.println(procedureDoc.toString());

        return HttpStatus.OK;
    }
}
