class Startup
    include HTTParty
    require_relative '../hooks/startup_hook'
    base_uri "https://5efb7c4680d8170016f76647.mockapi.io/vbstartup"
     
    def initialize(body)
      @options = {:body => body}
      @options2 ={}
    end
  
    def postStartup
      self.class.post("/startup", @options)
    end

    def getStartup (id)
      self.class.get("/startup/#{id}", @options2)
    end

    def putStartup (id)
      self.class.put("/startup/#{id}", @options)
    end

    def deleteStartup (id)
      self.class.delete("/startup/#{id}", @options2)
    end
  end