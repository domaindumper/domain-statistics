# -*- encoding: utf-8 -*-
# stub: minitest 5.14.2 ruby lib

Gem::Specification.new do |s|
  s.name = "minitest".freeze
  s.version = "5.14.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "bug_tracker_uri" => "https://github.com/seattlerb/minitest/issues", "homepage_uri" => "https://github.com/seattlerb/minitest" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Ryan Davis".freeze]
  s.cert_chain = ["-----BEGIN CERTIFICATE-----\nMIIDPjCCAiagAwIBAgIBBDANBgkqhkiG9w0BAQsFADBFMRMwEQYDVQQDDApyeWFu\nZC1ydWJ5MRkwFwYKCZImiZPyLGQBGRYJemVuc3BpZGVyMRMwEQYKCZImiZPyLGQB\nGRYDY29tMB4XDTE5MTIxMzAwMDIwNFoXDTIwMTIxMjAwMDIwNFowRTETMBEGA1UE\nAwwKcnlhbmQtcnVieTEZMBcGCgmSJomT8ixkARkWCXplbnNwaWRlcjETMBEGCgmS\nJomT8ixkARkWA2NvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALda\nb9DCgK+627gPJkB6XfjZ1itoOQvpqH1EXScSaba9/S2VF22VYQbXU1xQXL/WzCkx\ntaCPaLmfYIaFcHHCSY4hYDJijRQkLxPeB3xbOfzfLoBDbjvx5JxgJxUjmGa7xhcT\noOvjtt5P8+GSK9zLzxQP0gVLS/D0FmoE44XuDr3iQkVS2ujU5zZL84mMNqNB1znh\nGiadM9GHRaDiaxuX0cIUBj19T01mVE2iymf9I6bEsiayK/n6QujtyCbTWsAS9Rqt\nqhtV7HJxNKuPj/JFH0D2cswvzznE/a5FOYO68g+YCuFi5L8wZuuM8zzdwjrWHqSV\ngBEfoTEGr7Zii72cx+sCAwEAAaM5MDcwCQYDVR0TBAIwADALBgNVHQ8EBAMCBLAw\nHQYDVR0OBBYEFEfFe9md/r/tj/Wmwpy+MI8d9k/hMA0GCSqGSIb3DQEBCwUAA4IB\nAQCkkcHqAa6IKLYGl93rn78J3L+LnqyxaA059n4IGMHWN5bv9KBQnIjOrpLadtYZ\nvhWkunWDKdfVapBEq5+T4HzqnsEXC3aCv6JEKJY6Zw7iSzl0M8hozuzRr+w46wvT\nfV2yTN6QTVxqbMsJJyjosks4ZdQYov2zdvQpt1HsLi+Qmckmg8SPZsd+T8uiiBCf\nb+1ORSM5eEfBQenPXy83LZcoQz8i6zVB4aAfTGGdhxjoMGUEmSZ6xpkOzmnGa9QK\nm5x9IDiApM+vCELNwDXXGNFEnQBBK+wAe4Pek8o1V1TTOxL1kGPewVOitX1p3xoN\nh7iEjga8iM1LbZUfiISZ+WrB\n-----END CERTIFICATE-----\n".freeze]
  s.date = "2020-09-01"
  s.description = "minitest provides a complete suite of testing facilities supporting\nTDD, BDD, mocking, and benchmarking.\n\n    \"I had a class with Jim Weirich on testing last week and we were\n     allowed to choose our testing frameworks. Kirk Haines and I were\n     paired up and we cracked open the code for a few test\n     frameworks...\n\n     I MUST say that minitest is *very* readable / understandable\n     compared to the 'other two' options we looked at. Nicely done and\n     thank you for helping us keep our mental sanity.\"\n\n    -- Wayne E. Seguin\n\nminitest/test is a small and incredibly fast unit testing framework.\nIt provides a rich set of assertions to make your tests clean and\nreadable.\n\nminitest/spec is a functionally complete spec engine. It hooks onto\nminitest/test and seamlessly bridges test assertions over to spec\nexpectations.\n\nminitest/benchmark is an awesome way to assert the performance of your\nalgorithms in a repeatable manner. Now you can assert that your newb\nco-worker doesn't replace your linear algorithm with an exponential\none!\n\nminitest/mock by Steven Baker, is a beautifully tiny mock (and stub)\nobject framework.\n\nminitest/pride shows pride in testing and adds coloring to your test\noutput. I guess it is an example of how to write IO pipes too. :P\n\nminitest/test is meant to have a clean implementation for language\nimplementors that need a minimal set of methods to bootstrap a working\ntest suite. For example, there is no magic involved for test-case\ndiscovery.\n\n    \"Again, I can't praise enough the idea of a testing/specing\n     framework that I can actually read in full in one sitting!\"\n\n    -- Piotr Szotkowski\n\nComparing to rspec:\n\n    rspec is a testing DSL. minitest is ruby.\n\n    -- Adam Hawkins, \"Bow Before MiniTest\"\n\nminitest doesn't reinvent anything that ruby already provides, like:\nclasses, modules, inheritance, methods. This means you only have to\nlearn ruby to use minitest and all of your regular OO practices like\nextract-method refactorings still apply.".freeze
  s.email = ["ryand-ruby@zenspider.com".freeze]
  s.extra_rdoc_files = ["History.rdoc".freeze, "Manifest.txt".freeze, "README.rdoc".freeze]
  s.files = ["History.rdoc".freeze, "Manifest.txt".freeze, "README.rdoc".freeze]
  s.homepage = "https://github.com/seattlerb/minitest".freeze
  s.licenses = ["MIT".freeze]
  s.rdoc_options = ["--main".freeze, "README.rdoc".freeze]
  s.required_ruby_version = Gem::Requirement.new([">= 2.2".freeze, "< 3.1".freeze])
  s.rubygems_version = "3.0.3".freeze
  s.summary = "minitest provides a complete suite of testing facilities supporting TDD, BDD, mocking, and benchmarking".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rdoc>.freeze, [">= 4.0", "< 7"])
      s.add_development_dependency(%q<hoe>.freeze, ["~> 3.22"])
    else
      s.add_dependency(%q<rdoc>.freeze, [">= 4.0", "< 7"])
      s.add_dependency(%q<hoe>.freeze, ["~> 3.22"])
    end
  else
    s.add_dependency(%q<rdoc>.freeze, [">= 4.0", "< 7"])
    s.add_dependency(%q<hoe>.freeze, ["~> 3.22"])
  end
end
